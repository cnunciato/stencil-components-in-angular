import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.scss'
})
export class AppProfile {
  @Prop() match: MatchResults;
  @Prop() name: string;
  @Prop() currentTime: string;

  componentDidUpdate() {
    console.log('The component did update');
  }

  componentWillLoad() {
    console.log('The component is about to be rendered');
  }

  componentDidLoad() {
    console.log('The component has been rendered');
  }

  render() {

    if (this.match && this.match.params.name) {
      return (
        <div>
          <p>
            Hello! My name is {this.match.params.name}.
            My name was passed in through a route param!
          </p>
        </div>
      );
    }
    else {
      return (
        <div>
          <p>
            Hello! My name is {this.name}.
            The current time is {this.currentTime}.
          </p>
        </div>
      );
    }
  }
}
