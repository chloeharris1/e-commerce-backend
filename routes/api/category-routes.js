const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products 
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products - do I need to include product id model?
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
  }).then(newCategory=>{
    res.json(newCategory);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({message:"An error occured", err:err})
  })
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  // Calls the update method on the category model
  Category.update(
  {
    id: req.body.id,
    category_name: req.body.category_name,
  },
  {
    // Gets the category based on the id given in the request parameters
    where: {
      id: req.params.id,
    },
  }
)
  .then((updatedCategory) => {
    // Sends the updated book as a json response
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

// // Delete route for a category with a matching id
// router.delete('/:id', (req, res) => {
// // Looks for the category based on id given in the request parameters and deletes the instance from the database
// Category.destroy({
//   where: {
//     id: req.params.id,
//   },
// })
//   .then((deletedCategory) => {
//     res.json(deletedCategory);
//   })
//   .catch((err) => res.json(err));
// });

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
