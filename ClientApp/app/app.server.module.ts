import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        AppModuleShared
    ]
})
export class AppModule {
}
