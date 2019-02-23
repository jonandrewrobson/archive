import { h, Component } from 'preact';
import { getRecentlyPlayed } from '../../lib/api';
import { Link } from 'preact-router/match';
import { url } from '../../utils/date';

class Playlist extends Component {
  state = {
    played: []
  }

  componentDidMount() {
    getAllPlayed().then(played =>
        this.setState({
          played
        })
      )
  }
  render({}, { played }) {
    return (
      <section>
          {characters && characters.length ?
          <div>
            <h1>Played</h1>
            <ul></ul>
              
            : 'Loading' }
        </div>
      </section>

    )
  }
}

export default Playlist;
