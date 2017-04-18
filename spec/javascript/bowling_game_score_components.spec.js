import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { BowlingGameScoreContainer } from '../../app/javascript/packs/bowling_game_score_components/bowling_game_score_container';
import { BowlingGameTable } from '../../app/javascript/packs/bowling_game_score_components/bowling_game_table';

describe('BowlingGameScoreContainer', () => {
    it('should render Bowling Game Score', () => {
        const wrapper = shallow(<BowlingGameScoreContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <BowlingGameTable/>
        ])).to.equal(true);
    });
})