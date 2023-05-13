import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { NgcomponentDirectiveComponent } from './ngcomponent-directive/ngcomponent-directive.component';
import { YellowBackgroundDirective } from './shared/yellow-background.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [AppComponent, NgifDirectiveComponent, NgswitchDirectiveComponent, NgclassDirectiveComponent, NgstyleDirectiveComponent, NgcomponentDirectiveComponent, YellowBackgroundDirective, CustomDirectiveComponent, HighlightMouseDirective, HighlightDirective, NgElseDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
