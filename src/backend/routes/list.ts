import { Router } from 'express';

import { List } from '../models';

const router = Router();

router.get('/', (req, res, next) => {
  List.find({}, (err, data) => {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.get('/:id', (req, res, next) => {
  List.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.post('/', (req, res, next) => {
  const list = new List(req.body);

  list.save(err => {
    if (err) {
      return next(err);
    }

    res.json({ message: 'List saved' });
  });
});

router.put('/:id', (req, res, next) => {
  List.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }

    for (const prop in req.body) {
      if (req.body) {
        data[prop] = req.body[prop];
      }
    }


    data.save(saveErr => {
      if (saveErr) {
        return next(saveErr);
      }

      res.json({ message: 'List updated' });
    });
  });
});

router.delete('/:id', (req, res, next) => {
  List.findByIdAndRemove(req.params.id, err => {
    if (err) {
      return next(err);
    }

    res.json({ message: 'List deleted' });
  });
});

export const listRoutes = router;
