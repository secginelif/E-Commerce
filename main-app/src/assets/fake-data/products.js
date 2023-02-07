// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";

import product_02_image_02 from "../images/product_2.2.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Apple Macbook Air Gümüş",
    price: 24.0,
    description:"Apple Macbook Air MGN63TU-A 13.3 inç ekran genişliği ve IPS özelliği sunuyor. 2560x1600 Piksel ekran çözünürlüğü, renk ve detayları ön plana çıkarıyor. 256 GB SDD depolama sağlayan Apple Macbook Air MGN63TU-A sahip olduğu 8 GB RAM sayesinde birden fazla işlemi aynı",
    image01: product_01_image_01,
    category: "Laptop",

  },

  {
    id: "02",
    title: "Apple Macbook Air Uzay Grisi",
    price: 115.0,
    description:"Apple Macbook Air MGN93TU-A 13.3 inç ekran genişliği ve IPS özelliği sunuyor. 2560x1600 piksel ekran çözünürlüğü, renk ve detayları ön plana çıkarıyor. 256 GB SDD depolama sağlayan Apple Macbook Air MGN93TU-A sahip olduğu 8 GB RAM sayesinde birden fazla işlemi aynı",
    image01: product_01_image_01,
    category: "Laptop",

  },

  {
    id: "03",
    title: "Lenovo ThinkBook 20SM0038TX ",
    price: 110.0,
    description:"Lenovo ThinkBook 15 20SM0038TX, 15.6 inç ekran genişliği ve IPS özelliği sunuyor. 1920x1080 piksel ekran çözünürlüğü, renk ve detayları ön plana çıkarıyor. 256 GB SDD depolama sağlayan Lenovo ThinkBook 15 20SM0038TX sahip olduğu 8 GB RAM",
    image01: product_03_image_01,
    category: "Laptop",

  },

  {
    id: "04",
    title: "Asus X515Ea-Bq2293W/I3-11155G4  ",
    price: 110.0,
    description:"Asus D567509DA-EJ315  notebook 4 GB RAM’e ile oyunların ve programların akıcı çalışmasını sağlar. Dahili ekran kartı ile günlük kullanıma uygun grafik işlemlerini rahatlıkla çözümler. AMD Ryzen 5 3500U işlemcisi karmaşık ve çoklu  256 GB SSD",
    image01: product_04_image_01,
    category: "Laptop",

  },

  {
    id: "05",
    title: "Xiaomi Redmi Note 11 Pro",
    price: 24.0,
    description:"Redmi Note 11 Pro, 6.67 inç ekran büyüklüğünün yanı sıra 1080x2400 piksel ekran çözünürlüğüyle birlikte muhteşem görüntü kalitesine sahiptir. 128 GB genişletilebilir depolama alanının yanı sıra 8 GB RAM de bünyesinde barındırmaktadır. 5000 mAh bataryası sayesinde",
    image01: product_05_image_01,
    category: "Phone",

  },
  {
    id: "06",
    title: "Apple iPhone 11 128 GB Beyaz",
    price: 24.0,
    description:"Apple iPhone 11, mükemmel tasarımının yanı sıra 828 x 1792 piksel çözünürlük ile 6.1 inç dokunmatik ekrana sahiptir. Arka tarafta iki adet 12 MP ana kamera ve ön tarafta portreler için 12 MP kamera ile mükemmel fotoğraflar çekebilirsiniz. 128 GB dahili depolama alanı ile daha",
    image01: product_05_image_02 ,
    category: "phone",

  },

  {
    id: "07",
    title: "Apple iPhone 11 128 GB Uzay Grisi",
    price: 115.0,
    description:"Apple iPhone 11, mükemmel tasarımının yanı sıra 828 x 1792 piksel çözünürlük ile 6.1 inç dokunmatik ekrana sahiptir. Arka tarafta iki adet 12 MP ana kamera ve ön tarafta portreler için 12 MP kamera ile mükemmel fotoğraflar çekebilirsiniz. 128 GB dahili depolama alanı ile daha",
    image01: product_05_image_02,
    category: "Pizza",

  },

  {
    id: "08",
    title: "Xiaomi Redmi Note 11",
    price: 110.0,
    description:"Redmi Note 11 Pro, 6.67 inç ekran büyüklüğünün yanı sıra 1080x2400 piksel ekran çözünürlüğüyle birlikte muhteşem görüntü kalitesine sahiptir. 128 GB genişletilebilir depolama alanının yanı sıra 8 GB RAM de bünyesinde barındırmaktadır. 5000 mAh bataryası sayesinde",
    image01: product_05_image_01,
    category: "Pizza",

  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    description:"",
    image01: product_05_image_01,

    category: "Pizza",

  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    description:"",
    image01: product_05_image_02,

    category: "Burger",

  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 35.0,
    description:"",
    image01: product_06_image_01,

    category: "Bread",

  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    description:"selam",
    image01: product_06_image_02,

    category: "Bread",

  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 35.0,
    description:"",
    image01: product_06_image_03,

    category: "Bread",

  
  },
];

export default products;
