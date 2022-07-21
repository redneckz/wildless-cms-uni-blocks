import { context } from '../../setup-fixture';

import { Headline } from './Headline';
import { Headline as MobileHeadline } from './Headline.mobile';
import { HeadlineContent } from './HeadlineContent';
import { Picture } from '../../model/Picture';

export const HEADLINE: HeadlineContent = {
  title: 'Своя кредитная карта',
  description: 'Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах.',
  align: 'center',
  bgColor: 'transparent',
};

const image: Picture = {
  src: 'globe-1.png',
  format: 'webp',
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE} />
    </div>
  ),
  'left white': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        {...HEADLINE}
        align="left"
        bgColor="bg-white"
      />
    </div>
  ),
  'right transparent': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        {...HEADLINE}
        align="right"
        bgColor="transparent"
      />
    </div>
  ),
  mobile: (
    <div className="container grid grid-cols-12">
      <MobileHeadline
        className="col-span-12"
        context={context}
        title="Копите в нескольких валютах"
        description="Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада"
        image={image}
      />
    </div>
  ),
  'mobile title-img': (
    <div className="container grid grid-cols-12">
      <MobileHeadline
        className="col-span-12"
        context={context}
        title="Копите в нескольких валютах"
        image={image}
      />
    </div>
  ),
  'mobile desc-img': (
    <div className="container grid grid-cols-12">
      <MobileHeadline
        className="col-span-12"
        context={context}
        description="Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада"
        image={image}
      />
    </div>
  ),
  'mobile white': (
    <div className="container grid grid-cols-12">
      <MobileHeadline
        className="col-span-12"
        context={context}
        title="Копите в нескольких валютах"
        description="Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада"
        bgColor="bg-white"
        image={image}
      />
    </div>
  ),
};
