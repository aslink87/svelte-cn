import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
  name: 'custom-theme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': 'Inter-Regular',
    '--theme-font-family-heading': 'Inter-Bold',
    '--theme-font-color-base': '#f2e5d4',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '9999px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '0 0 0',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '0 0 0',
    // =~= Theme Colors  =~=
    // primary | #07336a
    '--color-primary-50': '218 224 233', // #dae0e9
    '--color-primary-100': '205 214 225', // #cdd6e1
    '--color-primary-200': '193 204 218', // #c1ccda
    '--color-primary-300': '156 173 195', // #9cadc3
    '--color-primary-400': '81 112 151', // #517097
    '--color-primary-500': '7 51 106', // #07336a
    '--color-primary-600': '6 46 95', // #062e5f
    '--color-primary-700': '5 38 80', // #052650
    '--color-primary-800': '4 31 64', // #041f40
    '--color-primary-900': '3 25 52', // #031934
    // secondary | #6979c1
    '--color-secondary-50': '233 235 246', // #e9ebf6
    '--color-secondary-100': '225 228 243', // #e1e4f3
    '--color-secondary-200': '218 222 240', // #dadef0
    '--color-secondary-300': '195 201 230', // #c3c9e6
    '--color-secondary-400': '150 161 212', // #96a1d4
    '--color-secondary-500': '105 121 193', // #6979c1
    '--color-secondary-600': '95 109 174', // #5f6dae
    '--color-secondary-700': '79 91 145', // #4f5b91
    '--color-secondary-800': '63 73 116', // #3f4974
    '--color-secondary-900': '51 59 95', // #333b5f
    // tertiary | #dbd22f
    '--color-tertiary-50': '250 248 224', // #faf8e0
    '--color-tertiary-100': '248 246 213', // #f8f6d5
    '--color-tertiary-200': '246 244 203', // #f6f4cb
    '--color-tertiary-300': '241 237 172', // #f1edac
    '--color-tertiary-400': '230 224 109', // #e6e06d
    '--color-tertiary-500': '219 210 47', // #dbd22f
    '--color-tertiary-600': '197 189 42', // #c5bd2a
    '--color-tertiary-700': '164 158 35', // #a49e23
    '--color-tertiary-800': '131 126 28', // #837e1c
    '--color-tertiary-900': '107 103 23', // #6b6717
    // success | #70a5c6
    '--color-success-50': '234 242 246', // #eaf2f6
    '--color-success-100': '226 237 244', // #e2edf4
    '--color-success-200': '219 233 241', // #dbe9f1
    '--color-success-300': '198 219 232', // #c6dbe8
    '--color-success-400': '155 192 215', // #9bc0d7
    '--color-success-500': '112 165 198', // #70a5c6
    '--color-success-600': '101 149 178', // #6595b2
    '--color-success-700': '84 124 149', // #547c95
    '--color-success-800': '67 99 119', // #436377
    '--color-success-900': '55 81 97', // #375161
    // warning | #dc8567
    '--color-warning-50': '250 237 232', // #faede8
    '--color-warning-100': '248 231 225', // #f8e7e1
    '--color-warning-200': '246 225 217', // #f6e1d9
    '--color-warning-300': '241 206 194', // #f1cec2
    '--color-warning-400': '231 170 149', // #e7aa95
    '--color-warning-500': '220 133 103', // #dc8567
    '--color-warning-600': '198 120 93', // #c6785d
    '--color-warning-700': '165 100 77', // #a5644d
    '--color-warning-800': '132 80 62', // #84503e
    '--color-warning-900': '108 65 50', // #6c4132
    // error | #0f70e9
    '--color-error-50': '219 234 252', // #dbeafc
    '--color-error-100': '207 226 251', // #cfe2fb
    '--color-error-200': '195 219 250', // #c3dbfa
    '--color-error-300': '159 198 246', // #9fc6f6
    '--color-error-400': '87 155 240', // #579bf0
    '--color-error-500': '15 112 233', // #0f70e9
    '--color-error-600': '14 101 210', // #0e65d2
    '--color-error-700': '11 84 175', // #0b54af
    '--color-error-800': '9 67 140', // #09438c
    '--color-error-900': '7 55 114', // #073772
    // surface | #5c7793
    '--color-surface-50': '231 235 239', // #e7ebef
    '--color-surface-100': '222 228 233', // #dee4e9
    '--color-surface-200': '214 221 228', // #d6dde4
    '--color-surface-300': '190 201 212', // #bec9d4
    '--color-surface-400': '141 160 179', // #8da0b3
    '--color-surface-500': '92 119 147', // #5c7793
    '--color-surface-600': '83 107 132', // #536b84
    '--color-surface-700': '69 89 110', // #45596e
    '--color-surface-800': '55 71 88', // #374758
    '--color-surface-900': '45 58 72', // #2d3a48
  },
};
