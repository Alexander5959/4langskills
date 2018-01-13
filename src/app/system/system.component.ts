import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-system',
    templateUrl: './system.component.html',
    styleUrls: ['./system.component.sass']
})
export class SystemComponent {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

}
