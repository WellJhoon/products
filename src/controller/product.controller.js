import {prisma} from "../db.js"

export const createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price,
        },
      });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo crear el producto.' });
    }
  };
  

  export const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products)
    } catch (error) {
        res.status(500).json({error: 'No se pudieron obtener los productos'})
    }
}


export const getProductById = async (req, res) => {
    const {id} = req.params;
    try{
        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if(product === null) {
            res.status(404).json({error: 'Producto no encontrado'})
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({error: 'no se pudo obtener el producto'})
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
      const updatedProduct = await prisma.product.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          description,
          price,
        },
      });
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo actualizar el producto.' });
    }
  };
  

 export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.product.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar el producto.' });
    }
  };
  

