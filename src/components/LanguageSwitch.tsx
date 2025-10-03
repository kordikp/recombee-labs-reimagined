import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'cs' : 'en')}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 gap-2"
    >
      <Languages className="w-4 h-4" />
      {language === 'en' ? 'CS' : 'EN'}
    </Button>
  );
};

export default LanguageSwitch;
