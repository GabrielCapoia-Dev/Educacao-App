import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HealthApi } from '../../core/api/health-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardPage {
  private readonly healthApi = inject(HealthApi);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly apiStatus = signal<'checking' | 'online' | 'offline'>('checking');
  protected readonly checkedAt = signal<string | null>(null);

  constructor() {
    this.checkApi();
  }

  protected checkApi(): void {
    this.apiStatus.set('checking');
    this.healthApi
      .check()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.apiStatus.set('online');
          this.checkedAt.set(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
        },
        error: () => this.apiStatus.set('offline'),
      });
  }
}
