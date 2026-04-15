import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 
    '.NET', 'Python', 'MySQL', 'NoSQL', 'API', 'DevOps', 'Cloud',
    'FastAPI', 'n8n', 'Power BI', 'Docker', 'IA Generativa'
  ];

  projects = [
    {
      title: 'Dash Fifa 23 (Python)',
      description: 'Dashboard interativo com Pandas e Webbrowser para análise de dados de jogadores.',
      tags: ['Python', 'Pandas', 'Webbrowser'],
      icon: 'bar-chart-3'
    },
    {
      title: 'Disney Clone',
      description: 'Clone responsivo da plataforma Disney+ focado em UI/UX e fidelidade visual.',
      tags: ['JavaScript', 'CSS', 'HTML'],
      icon: 'layout'
    },
    {
      title: 'N8N Projects - Automação',
      description: 'Criação de fluxos automatizados integrando APIs, bancos de dados e serviços em nuvem.',
      tags: ['n8n', 'API', 'Automação'],
      icon: 'zap'
    },
    {
      title: 'React API Project',
      description: 'Aplicação para consumo eficiente de APIs externas utilizando React e Axios.',
      tags: ['React.js', 'Axios', 'API'],
      icon: 'globe'
    },
    {
      title: 'WEX End-to-End Engineering',
      description: 'Bootcamp focado em engenharia completa, de fundamentos .NET a testes de QA em C#.',
      tags: ['.NET', 'QA/QC', 'C#'],
      icon: 'layers'
    },
    {
      title: 'Bootcamp Akad',
      description: 'Aplicações completas com React, .NET e IA com GitHub Copilot e Docker.',
      tags: ['React.js', '.NET', 'Docker', 'IA'],
      icon: 'cpu'
    },
    {
      title: 'LocalizaLabs React Developer',
      description: 'Desenvolvimento de aplicações modernas com foco em React, JS e TypeScript.',
      tags: ['React.js', 'JavaScript', 'TypeScript'],
      icon: 'code-2'
    },
    {
      title: 'Santander Backend Python',
      description: 'Sistemas interativos e APIs com FastAPI e SQL, focando em fundamentos de Python.',
      tags: ['Python', 'FastAPI', 'SQL'],
      icon: 'database'
    },
    {
      title: 'Orange Tech+ Inter',
      description: 'Formação prática cobrindo de HTML/CSS a React e trilha completa de back-end.',
      tags: ['JavaScript', 'TypeScript', 'React'],
      icon: 'terminal'
    },
    {
      title: 'XP Inc. Cloud & IA',
      description: 'Programa intensivo em Cloud Computing, IA Generativa e Engenharia de Prompt.',
      tags: ['Cloud', 'IA', 'Prompt Engineering'],
      icon: 'cloud'
    },
    {
      title: 'Klabin Excel BI & Dashboards',
      description: 'Transformação de dados em insights estratégicos com SQL, Power BI e ETL.',
      tags: ['SQL', 'Power BI', 'Excel'],
      icon: 'bar-chart-3'
    },
    {
      title: 'Python CRUD FastAPI',
      description: 'Projeto de CRUD explorando boas práticas, rotas RESTful e documentação Swagger.',
      tags: ['FastAPI', 'Python', 'REST'],
      icon: 'database'
    }
  ];
}