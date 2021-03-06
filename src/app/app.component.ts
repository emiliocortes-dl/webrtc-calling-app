import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  startWith,
} from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { CallService } from './calls/services/call.service';
import { CameraService } from './video/services/camera.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  loggedAs$ = this.authService.user$.pipe(startWith(null));
  camera$ = this.cameraService.camera$;
  currentCall$ = this.callService.currentCall$;
   

  constructor(
    private authService: AuthService,
    private cameraService: CameraService,
    private callService: CallService
  ) {
  }

  ngOnDestroy(): void {}

  ngOnInit() {}

  signout() {
    location.reload();
  }
}
