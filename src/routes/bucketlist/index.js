import { h } from 'preact';
import { Link } from 'preact-router/match';
import { url } from '../../utils/date';

const today = url();

const Bucketlist = () => (
  <div class="wrap center home lift-children">
    <Link href={today}>
      <h1>Welcome to your bucket list.</h1>
      <img src="/assets/images/study.svg" class="home-image" alt="" />
      <span class="button">Add to list</span>
    </Link>
  </div>
);

export default Bucketlist;
