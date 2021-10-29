const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// TODO: Get all, get by id, create new, update by id, delete

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products 
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbCatData => {
      if(!dbCatData) {
        res.status(404).json({message: 'No categories found'});
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  // try {
  //   const categoryData = await Category.findAll({
  //     include: [{ model: Product }],
  //   });
  //   res.status(200).json(categoryData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbCatData => {
      if(!dbCatData) {
        res.status(404).json({message: 'No categories found'});
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  
  // try {
  //   const categoryData = await Category.findByPk(req.params.id, {
  //     include: [{ model: Product }],
  //   });

  //   if (!categoryData) {
  //     res.status(404).json({ message: 'No category found with that id' });
  //     return;
  //   }
  //   res.status(200).json(categoryData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  // Calls the update method on the category model
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCatData => {
      if (!dbCatData) {
        res.status(404).json({message:'No category found with this id'});
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCatData => {
      if (!dbCatData){
        res.status(404).json({message: 'No category found with that id.'});
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    // try {
    //   const categoryData = await Category.destroy({
    //     where: {
    //       id: req.params.id,
    //     },
    //   });
  
    //   if (!categoryData) {
    //     res.status(404).json({ message: 'No category found with that id!' });
    //     return;
    //   }
    //   res.status(200).json(categoryData);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
});

module.exports = router;
