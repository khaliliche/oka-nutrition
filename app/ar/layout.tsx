import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أوكا نيوتريشن – الحل الطبيعي لتساقط الشعر',
  description: 'اكتشف أوكا نيوتريشن، المكمل الغذائي الطبيعي 100% لاستعادة شعر قوي وصحي. توصيل مجاني في جميع أنحاء المغرب.',
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return children;
}