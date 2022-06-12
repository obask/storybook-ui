import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import PlayerTable from './PlayerTable';
import GameTableDTO from "../../milito-shared/game/GameTableDTO";
import PhasesEnum from "../../milito-shared/enums/PhasesEnum";
import PlayerInfoDTO from "../../milito-shared/game/PlayerInfoDTO";
import FactionsEnum from "../../milito-shared/enums/FactionsEnum";
import HandDTO from "../../milito-shared/game/HandDTO";
import CardDTO from "../../milito-shared/game/CardDTO";

export default {
    title: 'Milito/Table',
    component: PlayerTable,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof PlayerTable>;

const Template: ComponentStory<typeof PlayerTable> = (args) => <PlayerTable {...args} />;

export const PlayerTableX = Template.bind({});

let card = new CardDTO({unitType: "Warband_Med_Inf"})

PlayerTableX.args = {
    game: new GameTableDTO({
        anotherPlayer: new PlayerInfoDTO({
            faction: FactionsEnum.AlexandrianMacedonian,
            hand: new HandDTO({cards: []}),
            playerId: 0,
            row1: [card, card, undefined, card, card],
            row2: [undefined, undefined, undefined, undefined],
        }),
        currentPlayer: new PlayerInfoDTO({
            faction: FactionsEnum.AncientBritish,
            hand: new HandDTO({cards: []}),
            playerId: 0,
            row1: [card, card, undefined, card, card],
            row2: [undefined, undefined, undefined, undefined],
        }),
        neutral: [0, 0, 0, 0, 0],
        phase: PhasesEnum.PHASE_1_VICTORY_CHECK,
    }),
};
