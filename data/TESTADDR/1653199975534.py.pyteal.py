from pyteal import *

globals().update(TealType.__members__)

def app():
    return  Seq(
    	Log(Bytes("Welcome to the matrix.")),
    	Return( Int(1) ) )

if __name__ == "__main__":
    print(compileTeal(app(), mode=Mode.Application, version=6))
