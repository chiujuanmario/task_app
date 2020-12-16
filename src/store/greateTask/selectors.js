export const MODULE_NAME = 'greateTask'

export const selectTaskIsOpen = state => state[MODULE_NAME].isOpenTask
export const selectTaskContent = state => state[MODULE_NAME].content