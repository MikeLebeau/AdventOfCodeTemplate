import { exampleInput, exampleInputTwo, realInput } from './inputs.js';

const dayNumber = 1

function starOne(useRealInput: boolean = true): String {
    const lines: String[] = useRealInput
    ? realInput.trim().split('\n')
    : exampleInput.trim().split('\n');

  let finalResult = '';

    return `Day ${dayNumber}* ${useRealInput ? 'realInput' : 'exampleInput'
    }: ${finalResult}`;
}

function starTwo(useRealInput: boolean = true): String {
    const lines: String[] = useRealInput
    ? realInput.trim().split('\n')
    : exampleInputTwo.trim().split('\n');

  let finalResult = '';

    return `Day ${dayNumber}** ${useRealInput ? 'realInput' : 'exampleInput'
    }: ${finalResult}`;
}

export default { starOne, starTwo };