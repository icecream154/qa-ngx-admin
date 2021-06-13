import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-user-post-placeholder',
  templateUrl: 'user-post-placeholder.component.html',
  styleUrls: ['user-post-placeholder.component.scss'],
})
export class UserPostPlaceholderComponent {

  @HostBinding('attr.aria-label')
  label = 'Loading';
}
