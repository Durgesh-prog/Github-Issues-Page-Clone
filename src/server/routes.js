import express from 'express';
import pageBuilder from './pageBuilder';
import { publicRequest } from '@utils/network';
import { defaultState as AppReducer } from '@ui/app/reducer';


const router = express.Router();

router.get('/blog/:endpoint', sendBlogPage);
router.get('/blogs', sendBlogsPage);
router.get('*', sendPage);

async function sendBlogPage(req,res) {
  try {
    const response = await publicRequest({
      url: 'blog/url',
      method: 'GET',
      params: {
        endpoint: req.params.endpoint,
      },
    });
    if (!response.data) throw new Error('Not Found');
    res.send(
      pageBuilder(
        req,
        {
          title: response.data.title,
          description: response.data.description,
        },
        {
          blogState: {
            ...blogListDefaultState,
            isFetching: false,
            data: response.data,
          },
        },
      ),
    );
  } catch (e) {
    sendNotFoundPage(res);
  }
}

async function sendBlogsPage(req, res , next) {
  try {
    const response = await publicRequest({
      url: 'blogs/latest',
      method: 'GET',
      params: { pageNumber: 1, pageItemCount: 1000 },
    });
    res.send(
      pageBuilder(
        req,
        {
          title: 'SSr',
          description:
            'SSR',
        },
        {
          blogListState: {
            ...blogListDefaultState,
            isFetching: false,
            data: response.data ? response.data : null,
          },
        },
      ),
    );
  } catch (e) {
    next(e);
  }
}

function sendPage(req, res) {
  res.send(pageBuilder(req));
}

function sendNotFoundPage(res) {
  res.redirect('/404');
}

export default router;
