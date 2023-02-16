import { sequelize } from '@database/index'
import { DataTypes, Model } from 'sequelize'

interface User extends Model {
  id: number
  name: string
  email: string
  password: string
}

const User = sequelize.define < User > (
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
)

export { User }
