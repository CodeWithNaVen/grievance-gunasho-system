'use client';
import { useTranslation } from 'react-i18next';

export default function SubmitPage() {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h2>{t('submit_grievance')}</h2>
            <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'np' : 'en')}>
                {i18n.language === 'en' ? 'NP' : 'EN'}
            </button>
            <form className="flex flex-col gap-4 mt-4">
                <input type="text" placeholder="Title" className="border p-2" />
                <textarea placeholder="Description" className="border p-2" />
                
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    {t('submit_grievance')}
                </button>
            </form>
        </div>
    );
}
