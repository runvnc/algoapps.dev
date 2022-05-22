from pyteal import *

globals().update(TealType.__members__)

def app():
    return  Seq(
    	Log(Bytes("Compiling to TEAL")),
    	Log(Concat(Bytes("First arg is "),args_[0])),
    	Return( Int(1) ) )

if __name__ == "__main__":
    print(compileTeal(app(), mode=Mode.Application, version=6))
