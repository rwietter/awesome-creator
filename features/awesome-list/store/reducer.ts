import { ActionType as Type } from './types';

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case Type.SAVE_PAGE:
      return {
        ...state,
        awesomeName: payload.awesomeName,
        awesomeTitleId: payload.awesomeTitleId,
      };
    default:
  }
};

export { reducer };
