export class MainController {

  constructor () {
    'ngInject';

    // sidenav elements
    this.sidenav = [
      {
        name: 'Home',
        route: 'main',
        icon: 'home'
      },
      {
        name: 'Work',
        route: 'main.other',
        icon: 'work'
      }
    ];

  }

  /**
   * Popup about box.
   */
  about() {

  }

  /**
   * Sign out
   */
  signout() {

  }

}
