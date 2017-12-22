const router = require('express').Router();
const search = require('../db/controllers/search.js');
const project = require('../db/controllers/project.js');
const notification = require('../db/controllers/notification.js');
const profile = require('../db/controllers/profile.js');
const signup = require('../db/controllers/signup.js');
const position = require('../db/controllers/position.js');

import { authUser } from '../controllers/user';
import {verifyUserWithJWT} from '../middleware/authentication';

router.route('/projectsearch')
  .post(search.projectSearch);

router.route('/usersearch')
  .post(search.userSearch);

router.route('/createproject')
  .post(verifyUserWithJWT, project.createProject);

router.route('/updateproject')
  .post(project.updateProject);

router.route('/createnote')
  .post(notification.createNotification);

router.route('/updatenote')
  .post(notification.updateNotification);

router.route('/profile')
  .get(verifyUserWithJWT, profile.get);

router.route('/updatetech')
  .post(profile.updateTech)

router.route('/updateprofile')
  .post(profile.update);

router.route('/signup')
  .post(signup.post);

router.route('/login')
  .post(authUser);

router.route('/getproject')
  .post(project.getProject);

router.route('/addposition')
  .post(position.addPosition);

router.route('/updateposition')
  .post(position.updatePosition);

router.route('/deleteposition')
  .post(position.deletePosition);
// add authUser

module.exports = router;
