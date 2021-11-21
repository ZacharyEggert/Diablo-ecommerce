import { useThemeState } from 'lib/providers/darkMode';

const ThemeToggleSwitch: React.FC = () => {
    const themeState = useThemeState();

    return (
        <div className='theme-toggle-switch'>
            <label className='theme-toggle-switch__label'>
                <input
                    className='theme-toggle-switch__input'
                    type='checkbox'
                    checked={themeState.darkMode}
                    onChange={themeState.toggleDarkMode}
                />
                <span className='theme-toggle-switch__slider'></span>
            </label>
        </div>
    );
};

export default ThemeToggleSwitch;
