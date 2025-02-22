import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { CheckIcon, Palette } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function ThemeSwitcher(){
    const { theme, setTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' 
                className="rounded-full w-9 h-9 p-0 bg-foreground hover:bg-muted text-background hover:text-muted-foreground border-0 outline-none">
                <Palette className="w-6 h-6" ></Palette>
                <DropdownMenuContent align="end" className="z-[99998]">
                    <DropdownMenuItem onClick={() => setTheme('light')} >
                        <span>Light</span>
                        { theme === 'light' && <CheckIcon 
                            className='ml-2 h-4 w-4' 
                        /> }
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')} >
                        <span>Dark</span>
                        { theme === 'dark' && <CheckIcon 
                            className='ml-2 h-4 w-4'  
                        /> }
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('custom')} >
                        <span>Custom</span>
                        { theme === 'custom' && <CheckIcon 
                            className='ml-2 h-4 w-4' 
                        /> }
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}
