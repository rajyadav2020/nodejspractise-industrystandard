import {readFile, writeFile} from 'fs/promises';

// async function modifyJson()
// {
//   try{
//     const rawdata = await readFile('data.json','utf-8');

//     const data = JSON.parse(rawdata);

//     data.count += 1;

//     await writeFile('data.json',JSON.stringify(data,null,2))

//     console.log(`successfully updated count to ${data.count}`)
//   }
//   catch(error)
//   {
//     console.error("error modifying the file: ",error)
//   }
// }

// modifyJson()

const command = process.argv[2];
const noteContent = process.argv[3];
const File_path = 'notes.json';

async function managenotes()
{
  let notes: string[] = [];

  try{
    const raw = await readFile (File_path,'utf-8')
    notes = JSON.parse(raw)
  }catch{
    await writeFile (File_path,'[]');
  }


  if(command === 'add' && noteContent)
  {
    notes.push(noteContent);
    await writeFile(File_path, JSON.stringify(notes, null, 2));

    console.log('notes added')

  }
  else if(command === "list"){
    console.log("Your notes: \n",notes.join('\n-'));
  }

  else if(command === 'delete')
  {
    notes = [];
    await writeFile(File_path,JSON.stringify(notes));

    console.log("all notes deleted")
  }
}

managenotes();

