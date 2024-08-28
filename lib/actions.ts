"use server";

import { redirect } from "next/navigation";
import { deleteCource, saveCources } from "./api-db";
import { revalidatePath } from "next/cache";

function isValidINput(text) {
  return !text || text.trim() === "";
}

export const saveCource = async (state, formData) => {
  const cource = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: formData.get("price"),
    image: formData.get("cource_image"),
    release_date: formData.get("date"),
    cource_time: formData.get("time"),
    teacher: formData.get("name"),
    teacher_image: formData.get("profile_image"),
  };

  if (
    !cource.title ||
    (!isValidINput(cource.title) && !cource.description) ||
    (!isValidINput(cource.description) && !cource.teacher) ||
    (!isValidINput(cource.teacher) && !cource.price) ||
    (cource.price === 0 && !cource.cource_time) ||
    (cource.cource_time === 0 && !cource.image) ||
    (cource.image.size === 0 && !cource.teacher_image) ||
    cource.teacher_image.size === 0
  ) {
    return {
      message: "you have invalid data. so check again you inputs ",
    };
  }

  await saveCources(cource);
  revalidatePath("/cources");
  redirect("/cources");
};

export const deleteCourceDb = async (slug) => {
  await deleteCource(slug);
  revalidatePath(`/cources/${slug}`);
  return redirect("/cources");
};
