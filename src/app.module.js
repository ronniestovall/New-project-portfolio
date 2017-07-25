import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactFormComponent } from './components/contactForm/contactForm.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [NavigationComponent, ContactFormComponent],
    bootstrap:[NavigationComponent, ContactFormComponent]
})

export class AppModule {}