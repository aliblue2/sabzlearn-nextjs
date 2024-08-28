const sql = require("better-sqlite3");
const db = new sql("cources.db");

const initialCources = [
  {
    slug: "m1",
    title: "آموزش حرفه ای NodeJS بدون پیش نیاز",
    description:
      "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از دلایل استفاده از این تکنولوژی فارغ از یه خیلی از مزایاش برای برنامه نویسا(کسب و کار ها به کنار) همین بازار کارشه و ما توی این دوره از نقطه منفی صفر حتی اگه جاوااسکریپت بلد نباشید هم بهتون یادش میدیم و بعد میریم سراغ مباحث خود نود جی اس و اینقدر باهم پروژه میزنیم و تعامل میکنیم و یه خیلی نکته رو بهتون منتقل میکنیم تا به پختگی قابل قبولی برسید و درنهایت بتونید وارد بازار کار بشید. فارغ از همه این موارد ما توی این دوره علاوه بر اینکه مباحث فنی رو پوشش میدیم، بهتون یاد میدیم چطور از مهارتی که بدست میارید کسب درآمد کنید. برای مثال راجب چالشای استخدام به عنوان نود جی اس دولوپر، رزومه نویسی، بایدها و نباید های قرارداد نویسی، نکات مفید و کاربردی راجب نمونه کار زدن و... یه خیلی از مباحث دیگه بهتون آموزش داده میشه",
    image:
      "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-22-1-768x432.webp",
    price: 1650000,
    teacher: "محمدامین سعیدی راد ",
    teacher_image:
      "https://secure.gravatar.com/avatar/50db59beddbfed36a1646dae99ca7b2d?s=96&d=mm&r=g",
    release_date: "1403/06/02",
    cource_time: "83 ساعت",
  },
  {
    slug: "m2",
    title: "آموزش جامع api نویسی با PHP",
    description:
      "API یکی از پر کاربردترین اجزای نرم افزاریه که حتما باید بلد باشی! توی این دوره قراره api نویسی رو با زبان PHP یاد بگیریم.",
    image:
      "https://sabzlearn.ir/wp-content/uploads/2024/03/IMAGE-1402-12-24-13_42_44-1-768x432.webp",
    price: 600000,
    teacher: "معین باغشیخی",
    teacher_image:
      "https://secure.gravatar.com/avatar/1a7a0b04750b5b7b236b81c7f2adb5f9?s=96&d=mm&r=g",
    release_date: "1403/05/31",
    cource_time: "26 ساعت",
  },
  {
    slug: "m3",
    title: "آموزش پروژه محور NestJS از صفر!",
    description:
      "NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر Node.js هست. نست بر پایه الگوی معماری ماژولار پیاده سازی شده و میتونیم باهاش برنامه‌هایی با خوانایی بسیار بالا بسازیم",
    image:
      "https://sabzlearn.ir/wp-content/uploads/2024/04/IMAGE-1403-02-20-17_59_09_11zon-768x432.webp",
    price: 999500,
    teacher: "معین باغشیخی",
    teacher_image:
      "https://secure.gravatar.com/avatar/1a7a0b04750b5b7b236b81c7f2adb5f9?s=96&d=mm&r=g",
    release_date: "1403/05/31",
    cource_time: "6 ساعت",
  },
  {
    slug: "m4",
    title: "آموزش جنگو به صورت پروژه محور",
    description:
      "از ویژگی های مهم دوره آموزش جنگو میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و توجه به جزئیات، بررسی روش های مختلف حل مسئله و انتخاب بهترین روش ممکن، رعایت اصول کدنویسی، توجه به داکیومنت خوانی، بررسی خطاهای احتمالی و پشتیبانی اختصاصی اشاره کرد.",
    image:
      "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-20-1-768x432.webp",
    price: 1750000,
    teacher: "رضا دولتی",
    teacher_image:
      "https://secure.gravatar.com/avatar/ac7287d085cde5ec1b40baa3a395b82d?s=96&d=mm&r=g",
    release_date: "1403/05/31",
    cource_time: "48 ساعت",
  },
  {
    slug: "m5",
    title:
      "آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام [منتورشیپ]",
    description:
      "حدود 99 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت ReactJS ، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید! ری اکت گل سرسبد فرانت اند محسوب میشود،اگر دوره react را ببینید، بازار کار فرانت اند پیشنهادهای بسیار شگفت انگیزی برای شما خواهد داشت! در این دوره شما آموزش ری اکت رابر اساس تجربیات مدرس در دنیای واقعی و کار با شرکت های مختلف ایرانی یاد می گیرید و در دوره اموزش ری اکت مدرس دوره از نقطه صفر تا رسیدن شما به مرحله پیاده سازی نمونه کار، طراحی رزومه و ... استخدام همراه شما خواهد بود. (به این معنی که تا پس از این دوره استخدام نشوید، ما شما را رها نمیکنیم!) آموزش ری اکت و نمونه کارها و رزومه شما و خیلی از موارد دیگه توسط مدرس بررسی، راهنمایی و رفع اشکال خواهد شد تا شما عزیزان بتوانید نهایت خروجی را از این دوره به دست آورده و بعد از گذروندن این دوره وارد بازار کار شده و کسب درآمد کنید. پس اگر به HTML,CSS و Javascript تسلط داری، وقتشه که با آموزش ری اکت تیرخلاص رو بزنی و خودتو به همه اثبات کنی! برو بریم",
    image:
      "https://sabzlearn.ir/wp-content/uploads/2023/12/Com_react-1-768x432.webp",
    price: 2400000,
    teacher: "محمدامین سعیدی راد",
    teacher_image:
      "https://secure.gravatar.com/avatar/50db59beddbfed36a1646dae99ca7b2d?s=96&d=mm&r=g",
    release_date: "1402/10/15",
    cource_time: "99 ساعت",
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS cources (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    price INTEGER NOT NULL, 
    teacher TEXT NOT NULL,
    teacher_image TEXT NOT NULL, 
    release_date TEXT NOT NULL,
    cource_time INTEGER NOT NULL
    )
    `
).run();

function initDataBase() {
  const stmt = db.prepare(`
    INSERT INTO cources VALUES (
    null, 
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
  `);
  for (const cource of initialCources) {
    stmt.run(cource);
  }
}

initDataBase();
