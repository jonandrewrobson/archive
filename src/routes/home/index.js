import { h } from 'preact';
import { Link } from 'preact-router/match';
import { url } from '../../utils/date';

const today = url();
const onboarded = !!localStorage.getItem('journalbook_onboarded');

const Home = () =>
  onboarded ? (
    <div class="wrap center home lift-children">
      <Link href={today}>
        <h1>Welcome to your personal archive.</h1>
        <img src="/assets/images/study.svg" class="home-image" alt="" />
        <span class="button">Start writing</span>
      </Link>
    </div>
  ) : (
    <div class="wrap wrap--thin center home lift-children">
      <Link href="/get-started/">
        <h1>Welcome to JournalBook</h1>
        <img src="/assets/images/study.svg" class="home-image" alt="" />
        <span class="button">Get started</span>
      </Link>
      <div className="mt20 mb20">
        <h2>What's JournalBook?</h2>
        <p>JournalBook is a private, offline-first personal journal.</p>
        <p>
          Your notes are <strong>only</strong> stored on your device, they're
          never even sent to a server. You don't even need to sign-in to use it!
          It works offline, so you can reflect upon your day on the slow train
          journey home.
        </p>
        <p>
          It's quick, has right to left support, and is developed{' '}
          <a href="https://github.com/trys/JournalBook">in the open</a>. You can
          even add it to your homescreen as an app.
        </p>
      </div>
    </div>
  );

export default Home;
