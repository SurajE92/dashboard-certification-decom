DROP DATABASE IF EXISTS `apcmtrx_db`;
CREATE DATABASE  IF NOT EXISTS `apcmtrx_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `apcmtrx_db`;
GRANT ALL PRIVILEGES ON apcmtrx_db.* TO 'apcmtrx_admin'@'%';
FLUSH PRIVILEGES;