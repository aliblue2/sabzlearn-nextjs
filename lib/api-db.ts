import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
const db = sql("cources.db");

export const getAllCources = async () => {
  new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare(`SELECT * FROM cources`).all();
};

export const getCource = async (slug) => {
  new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare(`SELECT * FROM cources WHERE slug = ?`).get(slug);
};

export const saveCources = async (cource) => {
  cource.slug = slugify(cource.title, { lower: true });
  cource.description = xss(cource.description);
  const extension = cource.image.name.split(".").pop();
  const fileName = `${cource.slug}.${extension}`;

  const bufferedImg = await cource.image.arrayBuffer();
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  stream.write(Buffer.from(bufferedImg), (error) => {
    if (error) {
      throw new Error(error.message);
    }
  });
  cource.image = `/images/${fileName}`;
  const techername = slugify(cource.teacher, { lower: true });
  const extensionProf = cource.teacher_image.name.split(".").pop();
  const fileNameProf = `${cource.slug}${techername}.${extensionProf}`;

  const bufferedImgProf = await cource.teacher_image.arrayBuffer();
  const streamProf = fs.createWriteStream(`public/images/${fileNameProf}`);

  streamProf.write(Buffer.from(bufferedImgProf), (error) => {
    if (error) {
      throw new Error(error.message);
    }
  });
  cource.teacher_image = `/images/${fileNameProf}`;

  db.prepare(
    `
    INSERT INTO cources (
    slug , title , description , image , price , teacher, teacher_image,release_date,cource_time 
    ) VALUES (
    @slug,
    @title,
    @description,
    @image,
    @price, 
    @teacher,
    @teacher_image, 
    @release_date,
    @cource_time
    )
    `
  ).run(cource);
};

export const deleteCource = async (slug) => {
  const cource = db.prepare(`SELECT * FROM cources WHERE slug = ?`).get(slug);
  fs.unlink(`public${cource.image}`, (error) => {
    if (error) {
      throw new Error(error.message);
    }
  });
  fs.unlink(`public${cource.teacher_image}`, (error) => {
    if (error) {
      throw new Error(error.message);
    }
  });

  db.prepare(`DELETE FROM cources WHERE slug = ?`).run(slug);
};
