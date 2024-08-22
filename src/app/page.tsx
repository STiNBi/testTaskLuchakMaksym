import Preview from "./components/preview/preview";

import FirstPostImagePost1 from '../../public/ImagePost1.png'
import FirstPostImagePost2 from '../../public/ImagePost2.png'
import FirstPostImagePost3 from '../../public/ImagePost3.png'

import SecondPostImage1 from '../../public/SecondPostImage1.png'
import SecondPostImage2 from '../../public/SecondPostImage2.png'

import InfoComponent from "./components/first-posts/first-post-info-component/first-post-info-component";
import FirstPostHeader from "./components/first-posts/first-post-header/first-post-header";
import MainHeadersPosts from "./components/first-posts/first-post-main-headers/first-post-main-headers";
import SecondPosts from "./components/second-posts/second-posts/second-posts";


interface firstPostValue {
  children: React.ReactNode;
  bigText: string;
  text: string;
  image: any;
}

const firstPostsValue: firstPostValue[] = [
  {
    children: <FirstPostHeader />,
    bigText: 'Focus Wall',
    text: '(текстильний лайтбокс) - це втілення передових технологій та комплекс рішень для ефективної візуальної комунікації та оформлення простору. Вироби ідеально поєднують функціональність із сучасним дизайном, що робить їх придатними для широкого спектру застосувань, від рекламних до декоративних цілей.',
    image: FirstPostImagePost1
  },
  {
    children: <MainHeadersPosts headerText='02.Куби' />,
    bigText: 'Куби',
    text: '- це є стильний і функціональний акцент для будь-якого заходу, який привертає увагу та запам’ятовується. Сидіння-куби легко адаптується до будь-якого простору і миттєво привертає увагу. Запорукою універсальності та зручності рекламного пуфа - є легкість та мобільність. Максимальна універсальність і зручність завдяки легкості та мобільності рекламного пуфа. Пуфи Cube створені для довготривалого використання з можливістю легкої заміни чохла. Використовуйте всю поверхню сидінь та втілюйте в життя свої креативні ідеї.',
    image: FirstPostImagePost2
  },
  {
    children: <MainHeadersPosts headerText='03.Віндер' />,
    bigText: 'Віндери',
    text: '- зручний спосіб реклами для привернення уваги ваших клієнтів до бренду та подій. Це мобільні рекламні конструкції у вигляді прапорів на стійкому флагштоку. Вони відрізняються легкістю та зручністю у використанні.',
    image: FirstPostImagePost3
  }
]

interface TextContent {
  boldText: string;
  text: string;
}

interface secondPostValue {
  img: any;
  header: string;
  textContets: TextContent[];
}

const secondPostsValue: secondPostValue[] = [
  {
    img: SecondPostImage1,
    header: 'Алюмінієва рама',
    textContets: [
      {
        boldText: 'Алюмінієва рама',
        text: 'Рами виготовлені з високоякісного легкого алюмінію,  є довговічними, а також й естетично привабливі. Легкість рами сприяє простоті монтажу та транспортування, а також дозволяє легко оновлювати текстильні постери, що ідеально підходить для частих маркетингових кампаній.',
      },
      {
        boldText: 'Текстильний постер',
        text: 'Виготовлені з екологічно чистих матеріалів, тканинні постери характеризуються високою якістю зображення та відсутністю неприємних запахів, що робить їх ідеальними для внутрішнього використання. Зображення на текстилі виглядає яскраво, природно та реалістично.',
      },
      {
        boldText: 'LED-освітлення',
        text: 'Новітні технології світлодіодного освітлення забезпечують рівномірне світло, що підкреслює якість зображення і зменшує енергоспоживання.',
      }
    ],
  },
  {
    img: SecondPostImage2,
    header: 'Конструкція Куба',
    textContets: [
      {
        boldText: 'Наповнення',
        text: 'Брендовані м’які куби виготовленні з щільного поролоному. Що є безпечним для дітей та дозволяє створювати велике рекламне поле за допомогу виставлення кубів один на одного.',
      },
      {
        boldText: 'Зовнішні чохли',
        text: 'Виготовленні з тканини Оксфорд, котра відштовхує воду та не вимагає особливого догляду.',
      },
      {
        boldText: 'Брендування',
        text: 'На рекламному кубі можна розміщувати будь-яке повноколірне зображення на усіх 6-ти гранях, що надає максимальної видимості та ефективності реклами для вашої компанії чи продукту.',
      }
    ],
  }
]



export default function Home() {
  return (
    <main>
      <Preview />
      
      <InfoComponent
        children={firstPostsValue[0].children}
        bigText={firstPostsValue[0].bigText}
        text={firstPostsValue[0].text}
        image={firstPostsValue[0].image} />

      <SecondPosts img={secondPostsValue[0].img} header={secondPostsValue[0].header} textContets={secondPostsValue[0].textContets} />

      <InfoComponent
        children={firstPostsValue[1].children}
        bigText={firstPostsValue[1].bigText}
        text={firstPostsValue[1].text}
        image={firstPostsValue[1].image} />

      <SecondPosts img={secondPostsValue[1].img} header={secondPostsValue[1].header} textContets={secondPostsValue[1].textContets} />

      <InfoComponent
        children={firstPostsValue[2].children}
        bigText={firstPostsValue[2].bigText}
        text={firstPostsValue[2].text}
        image={firstPostsValue[2].image} />
    </main>
  );
}
