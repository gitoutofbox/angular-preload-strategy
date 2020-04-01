import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class Preloader implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const userConnection = navigator['connection'];
    const userConnectionType = userConnection.effectiveType || '';
    if (userConnection['saveData']) {
      return of(null);
    }
    
    if(userConnectionType.indexOf('2g') !== -1) {
        return  of(null);      
    }
    
    return route.data && route.data.preload ? load() : of(null);
  }
}