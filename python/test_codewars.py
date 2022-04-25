#!/usr/bin/env python
import os
import pytest
from solutions import *


def _test_turn_with_compass():
    assert direction("N", 0) == "N"
    assert direction("N", 45) == "NE"
    assert direction("N", 90) == "E"
    assert direction("S", 0) == "S"
    assert direction("E", 180) == "W"
    assert direction("W", 180) == "E"
    assert direction("NE", -90) == "NW"
 
def test_rule30():
    assert rule30([1], 1) == [1,1,1]