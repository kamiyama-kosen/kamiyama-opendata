export const ffmpeg = async (args) => {
  const command = new Deno.Command("ffmpeg", {
    args,
    stdout: "piped",
    stderr: "piped",
  });
  const { stdout, stderr } = await command.output();
  return {
    stdout: new TextDecoder().decode(stdout),
    stderr: new TextDecoder().decode(stderr),
  };
}
