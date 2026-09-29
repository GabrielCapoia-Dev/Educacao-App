import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-module-placeholder',
  template: `
    <section class="placeholder">
      <span class="eyebrow">MÓDULO EM CONSTRUÇÃO</span>
      <div class="symbol">{{ title().slice(0, 1) }}</div>
      <h1>{{ title() }}</h1>
      <p>Esta área será implementada por etapas, conectando a interface às operações PL/SQL da API.</p>
      <a routerLink="/">Voltar para a visão geral</a>
    </section>
  `,
  styles: `
    :host { display:block; min-height: 60vh; }
    .placeholder { display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:55vh; padding:30px; text-align:center; }
    .eyebrow { color:#7d899a; font-size:10px; font-weight:800; letter-spacing:.13em; }
    .symbol { display:grid; place-items:center; width:58px; height:58px; margin:22px 0 16px; border-radius:16px; background:#e8f1fb; color:#2b639c; font-size:24px; font-weight:800; }
    h1 { margin:0 0 10px; color:#17243b; font-size:28px; }
    p { max-width:430px; margin:0 0 22px; color:#738096; font-size:13px; line-height:1.7; }
    a { color:#316ba7; font-size:13px; font-weight:700; text-decoration:none; }
  `,
  imports: [RouterLink],
})
export class ModulePlaceholderPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly title = () => String(this.route.snapshot.data['title'] ?? 'Módulo');
}
