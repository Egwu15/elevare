import logo from '@/assets/images/Logo-light.svg';
import { cn } from '@/lib/utils';

export default function AppLogoIconDark({ className = '' }: { className?: string }) {
    return <img className={cn('', className)} src={logo} alt="Elevare logo" />;
}
