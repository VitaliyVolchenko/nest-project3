import { join } from 'path';

export default {
  templates: {
    path: join(__dirname, '..', 'views'),
  },
  public: {
    path: join(__dirname, '..', 'public'),
  },
};