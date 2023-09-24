import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = new Subject<boolean>();

  start() {
    this.isLoading.next(true);
  }

  stop() {
    timer(300).subscribe(() => {
      this.isLoading.next(false);
    });
  }
}
