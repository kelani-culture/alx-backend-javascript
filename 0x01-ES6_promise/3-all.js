import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then(([photo, user]) => {
    console.log(`${photo} ${user.firstName} ${user.lastName}`);
  }).catch(() => {
    // console.log([photo, user]);
    console.log('Signup system offline');
  });
}
