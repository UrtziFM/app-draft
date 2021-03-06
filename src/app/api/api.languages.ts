import { ILanguage } from '../interfaces/language.interface';

const response: ILanguage[] = [
    {
    id: 0,
    name: 'GIT',
    // tslint:disable-next-line: max-line-length
    image: 'https://img-0.journaldunet.com/3UIcNSjWcq-tBa0f4GZFguwrmDM=/1280x/smart/d14dfaf85798491f8a14d8a20be4c357/ccmcms-jdn/11458235.jpg'
},
    {
    id: 1,
    name: 'DOCKER',
    // tslint:disable-next-line: max-line-length
    image: 'https://res.cloudinary.com/teepublic/image/private/s--f2pKlznS--/t_Preview/b_rgb:fffffe,c_limit,f_jpg,h_630,q_90,w_630/v1521449955/production/designs/2490921_0.jpg'
},
    {
    id: 2,
    name: 'HTML5',
    // tslint:disable-next-line: max-line-length
    image: 'https://www.anerbarrena.com/wp-content/uploads/2016/04/html5.png'
},
    {
    id: 3,
    name: 'CSS3',
    // tslint:disable-next-line: max-line-length
    image: 'https://blog.aulaformativa.com/wp-content/uploads/2016/09/definicion-usos-ventajas-lenguaje-css3-que-es.jpg'
},
    {
    id: 4,
    name: 'JAVASCRIPT',
    // tslint:disable-next-line: max-line-length
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
},
    {
    id: 5,
    name: 'MONGO',
    image: 'http://pluspng.com/img-png/logo-mongodb-png-mongo-db-badge-sticker-600.png'
},
    {
    id: 6,
    name: 'EXPRESS',
    image: 'https://www.nextontop.com/assets/img/services/web/expressjs.svg'
},
{
    id: 7,
    name: 'ANGULAR',
    // tslint:disable-next-line: max-line-length
    image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/18/0505700a1611e7996331f6029a1fe7/angular.png?auto=format%2Ccompress&dpr=2.625'
},
    {
    id: 8,
    name: 'REACT',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZ3BNS6a3HUcWoOZHW0ckm9I2ngJA4uxp5rytQqhewXAIp3W8&s'
},
    {
    id: 9,
    name: 'NODE',
    image: 'https://ih0.redbubble.net/image.109336634.1604/aps,650x642,small,transparent-pad,750x1000,f8f8f8.u1.jpg'
},
    {
    id: 10,
    name: 'PYTHON',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbbykXtJeM5MnqAR5BsSuHsHu4D25Sa_grzbGSqjwz0nrabB-f'
},
    {
    id: 11,
    name: 'PHP',
    // tslint:disable-next-line: max-line-length
    image: 'https://www.emagister.com/express/media/catalog/product/cache/1/image/788x525/9df78eab33525d08d6e5fb8d27136e95/2/9/2971686_big_5/www.emagister.com-laborus-work-consulting-2971686-curso-online-programacion-php-31.jpg'
}];

export const getApiResponse = async (): Promise<ILanguage[]> => {
    return response;
  };
