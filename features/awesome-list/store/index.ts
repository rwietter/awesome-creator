import create, { UseBoundStore } from 'zustand';
import { persist, redux } from 'zustand/middleware';

import { reducer } from './reducer';
import { AwesomeList } from './types';

const state: AwesomeList = {
  awesomeName: '',
  awesomeTitleId: '',
};

interface AwesomeListStore {
  awesomeName: string;
  awesomeTitleId: string;
	dispatch: (payload: any) => void;
}

const useAwesomeListStore = create<AwesomeListStore>(
  persist(redux(reducer, state), { name: 'awesome-list-store' }),
);

export { useAwesomeListStore };
