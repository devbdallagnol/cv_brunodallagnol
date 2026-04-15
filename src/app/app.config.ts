import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Phone, Mail, Linkedin, Code2, Terminal, User, Car, Heart } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(LucideAngularModule.pick({ 
      Phone, Mail, Linkedin, Code2, Terminal, User, Car, Heart 
    }))
  ]
};