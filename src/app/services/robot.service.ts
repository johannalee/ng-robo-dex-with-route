import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RobotStoreService } from '../store/robot/robot.store.service';
import { SearchStoreService } from '../store/search/search.store.service';
import { Robot } from '../store/robot/robot.type';
import { FetchRobotError } from '../store/robot/robot.actions';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient,
    private robotStoreService: RobotStoreService,
    private searchStoreService: SearchStoreService
  ) {}

  public fetchRobots() {
    this.http.get<Robot[]>(`${this.baseUrl}/users`).subscribe(
      data => this.robotStoreService.fetchRobotSuccess(data),
      catchError(() => of(new FetchRobotError()))
    );
  }

  public filterRobots(): Observable<Robot[]> {
    return combineLatest(
      this.robotStoreService.getRobots(),
      this.searchStoreService.getSearchTerm(),
    ).pipe(
      map(([robots, searchTerm]) => robots.filter(robot => robot.name.toLowerCase().includes(searchTerm)))
    );
  }

  public deleteRobot(robotId: number) {
    this.robotStoreService.deleteRobot(robotId);
  }
}
